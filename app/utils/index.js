export function UserDisplayName(req){
    if(req.user){
        return req.user.dispayName;
    }
    return '';
};