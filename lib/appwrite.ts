import { CreateUserParams, SignInParams } from "@/type";
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appwriteConfig = {
    endpoint: process.env.XPO_PUBLIC_APPWRITE_ENDPOINT,
    platform: "com.jsm.foodordering",
    projectId: process.env.XPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: "697f43f90034ce0c432a",
    userCollectionId: "69807e9d000b2fae1bb4",
};

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint!)
    .setProject(appwriteConfig.projectId!)
    .setPlatform(appwriteConfig.platform!);

export const account = new Account(client)
export const databases = new Databases(client)
const avatars = new Avatars(client)

export const createUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, name);
        if (!newAccount) {
            throw Error;
        }
        await signIn({ email, password });

        const avatarUrl = avatars.getInitials(name);
        return await databases.createDocument(
            appwriteConfig.databaseId!,
            appwriteConfig.userCollectionId!,
            ID.unique(),
            { accountId: newAccount.$id, email, name, avatar: avatarUrl }
        );


    } catch (e) {
        throw new Error(e as string);
    }
}

export const signIn = async ({ email, password }: SignInParams) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
    } catch (e) {
        throw new Error(e as string);

    }
}