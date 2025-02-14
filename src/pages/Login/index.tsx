import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { Icons } from '../Icons/icons'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { UserLogIn } from '../types'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '@/context/userAuthContext'
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image7 from "../../assets/images/image7.jpg";


// import  {UserLogin } from "../types"
const initialValue: UserLogIn = {
  email: "",
  password: "",
};

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = () => {
      const {googleSignIn, logIn } = useUserAuth();
      const navigate = useNavigate();
      const [userLogInInfor, setUserLogInInfor] = useState<UserLogIn>(initialValue);

      const handleSubmit = async(e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
          console.log("The user infor is: ", userLogInInfor);
          await logIn(userLogInInfor.email, userLogInInfor.password);
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
    <div className='bg-slate-800 w-full h-screen'>
      <div className='container mx-auto p-6 flex h-full'>
        <div className='flex justify-center items-center w-full'>
          <div className='p-6 w-2/3 hidden lg:block'>
            <div className='grid grid-cols-2 gap-2'>
              <img 
                className='w-2/3 h-auto aspect-video rounded-3xl place-self-end' 
                alt=""
                src={image2}
              />
              <img 
                className='w-2/4 h-auto aspect-auto rounded-3xl' 
                alt=""
                src={image1}
              />
               <img 
                className='w-2/4 h-auto aspect-auto rounded-3xl place-self-end' 
                alt=""
                src={image3}
              />
               <img 
                className='w-2/3 h-auto aspect-video rounded-3xl' 
                alt=""
                src={image4}
              />

            </div>

          </div>

          <div className='max-w-sm rounded-xl border bg-card text-card-foreground'>
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center mb-4">PhotoGram</CardTitle>
                  <CardDescription>
                    Enter your email and password info below to log in
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-2 gap-6">
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
                      value={userLogInInfor.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserLogInInfor({ ...userLogInInfor, email: e.target.value})
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="password"
                      value={userLogInInfor.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserLogInInfor({ ...userLogInInfor, password: e.target.value})
                      }
                    />
                  </div>
              
                </CardContent>
                <CardFooter className='flex flex-col'>
                  <Button className="w-full" type='submit'>Login</Button>
                  <p className='mt-3 text-sm text-center'>
                    Don't have an account ? <Link to="/signup">Sign Up</Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Login;