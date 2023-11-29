interface IAuthContext {
    user: User | null;
    setUser: (user: User | null) => void;
}
