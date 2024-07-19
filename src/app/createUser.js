require('dotenv').config();
import axios from "axios";

export const createUser = async (user) => {

    if (user.user !== undefined || user.user) {
        const admin = await user?.user?.getOrganizationMemberships();
        const userToBack = {
            name: user?.user?.fullName,
            email: user?.user?.emailAddresses[0]?.emailAddress,
            image: user?.user?.imageUrl,
            isAdmin: admin?.length > 0 ? true : false,
        };

        if (!userToBack.name) userToBack.name = userToBack.email;
        try {

            const isLocal = process.env.NODE_ENV === "development";

            const urlUsers = isLocal ?
                process.env.NEXT_PUBLIC_GET_USERS_LOCAL :
                process.env.NEXT_PUBLIC_GET_USERS;

            const urlPostUser = isLocal ?
                process.env.NEXT_PUBLIC_POST_USER_LOCAL :
                process.env.NEXT_PUBLIC_POST_USER;

            const { data } = await axios(urlUsers);
            const existents = data.filter(user => user.email === userToBack.email);
            if (existents.length > 0) return existents[0];
            const creado = await axios.post(urlPostUser, userToBack);
            return creado;
        } catch (error) {
            console.error("ERROR AL CREAR USUARIO: ", error.message);
        }
    }

};