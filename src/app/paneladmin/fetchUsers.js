export const isAdmin = async (user) => {

    try {
        const data = await user?.user?.getOrganizationMemberships();
        if (data.length == 0) {
            return false;
        }
        return true;
    } catch (error) {
    }

}