import { User } from '../../../types/User.ts';

export interface NewAccountProps {
    classes: any,
    onSubmitEvent: (e:React.FormEvent<HTMLFormElement>) => void
    onChangeEvent: (user : User) => void
    user: User
    setUser: (user: User) => void
}