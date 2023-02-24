
interface ICreateUserRequest{
    name: string,
    email: string
}

class CreateUserService{
    execute({name, email} : ICreateUserRequest){
        const data = [];

        data.push({name, email});

        return data;
    }
}

export {CreateUserService}