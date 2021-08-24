export default interface AuthFormProps {
  formType: String,
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void,
  setEmail: React.Dispatch<React.SetStateAction<String>> | null,
  setUsername: React.Dispatch<React.SetStateAction<String>>,
  setPassword: React.Dispatch<React.SetStateAction<String>>,
  errorMessage: String,
  styles: {
    readonly [key: string]: string;
  }
}

export type signUpResponse = {
  "email": String[],
  "username": String[]
}