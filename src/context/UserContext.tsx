import react, {
  useState,
  useEffect,
  createContext,
  useContext,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

export type Skill = {
  listening: number;
  reading: number;
  speaking: number;
  writing: number;
  skills: string[];
  id: string;
  personalities: string[];
};

export type Experience = {
  index: number;
  name: string;
  period: string;
  type: string;
  location: string;
  id: string;
};

export type Education = {
  id: string;
  index: number;
  institution: string;
  degree: string;
  date: string;
  fieldOfStudy: string;
};

export type Certification = {
  id: string;
  index: number;
  name: string;
  desc: string;
  year: string;
};

export type User = {
  id: string;
  index: number;
  name: string;
  image: string;
  location: string;
  tagline: string;
  email: string;
  github: string;
  website: string;
  phone: string;
  strength: string;
  born: string;
  objective: string;
  experience: Experience[];
  education: Education[];
  skill: Skill;
  certification: Certification[];
};

export type UserProps = {
  user: User;
};

type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
// export const useUser = () => useContext(UserContext)
export const useUser = () => {
  return useContext(UserContext);
};
// fetch context => const user = useUser().currentUser
