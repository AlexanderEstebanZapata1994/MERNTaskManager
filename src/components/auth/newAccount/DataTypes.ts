import { User } from '../../../types';

export interface NewAccountRenderProps {
    classes: any,
    onSubmitEvent: (e:React.FormEvent<HTMLFormElement>) => void,
    onChangeEvent: (user : User) => void,
    user: User,
    setUser: (user: User) => void,
}