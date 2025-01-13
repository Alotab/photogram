import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { UserSignUp } from "../types"
import { Icons } from '../Icons/icons'
import { useUserAuth } from '@/context/userAuthContext'
import { Link, useNavigate } from 'react-router-dom'



const initialValue: UserSignUp = {
  email: "",
  password: "",
  confirmPassword: "",
};

interface ISignupProps {}


const Signup: React.FunctionComponent<ISignupProps> = () => {
  const {googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserSignUp>(initialValue)
  const handleSubmit = async(e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      console.log("The user infor is: ", userInfo);
      await signUp(userInfo.email, userInfo.password);
      navigate("/");

    }catch(error){
      console.log("Error: ", error)
    }
  }
  const handleGoogleSignIn = async(e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try{
      await googleSignIn();
      navigate("/");

    }catch(error){
      console.log("Error ", error);
    }

  }


  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center mb-4">PhotoGram</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" onClick={handleGoogleSignIn}>
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="m@example.com"
              value={userInfo.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserInfo({ ...userInfo, email: e.target.value})
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="password"
              value={userInfo.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserInfo({ ...userInfo, password: e.target.value})
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="confirmpassword" 
              type="password" 
              placeholder="Confirm password"
              value={userInfo.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserInfo({ ...userInfo, password: e.target.value})
              }
            />
          </div>
        </CardContent>
        <CardFooter className='flex flex-col'>
          <Button className="w-full" type='submit'>Create account</Button>
          <p className='mt-3 text-sm text-center'>
            Already have an account ? <Link to="/login">Log in</Link>
          </p>
        </CardFooter>
      </form>
   
    </Card>
  )
}

export default Signup