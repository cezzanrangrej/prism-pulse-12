import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarField from "@/components/StarField";
import PrismLogo from "@/components/PrismLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: isLogin ? "Welcome back!" : "Account created!",
      description: isLogin ? "Logging you in..." : "Your account has been created successfully.",
    });

    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <StarField />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - 3D Cube illustration */}
          <div className="hidden lg:flex items-center justify-center animate-float">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan to-purple opacity-30 blur-3xl rounded-full" />
              <div className="relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="cubeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(189, 100%, 50%)" />
                      <stop offset="100%" stopColor="hsl(293, 84%, 58%)" />
                    </linearGradient>
                    <linearGradient id="cubeGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(189, 100%, 50%)" />
                      <stop offset="100%" stopColor="hsl(200, 100%, 60%)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Back face */}
                  <polygon points="100,40 140,60 100,80 60,60" fill="url(#cubeGradient1)" opacity="0.6" />
                  <polygon points="60,60 60,100 100,120 100,80" fill="url(#cubeGradient2)" opacity="0.7" />
                  <polygon points="100,80 140,60 140,100 100,120" fill="url(#cubeGradient1)" opacity="0.8" />
                  
                  {/* Front face */}
                  <polygon points="100,100 140,120 100,140 60,120" fill="url(#cubeGradient1)" opacity="0.9" />
                  <polygon points="60,120 60,160 100,180 100,140" fill="url(#cubeGradient2)" opacity="0.95" />
                  <polygon points="100,140 140,120 140,160 100,180" fill="url(#cubeGradient1)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Auth form */}
          <div className="w-full max-w-md mx-auto animate-scale-in">
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-4">
                  <PrismLogo size="md" />
                </div>
                <h2 className="text-2xl font-bold">
                  {isLogin ? "Unlock Your Universe" : "Join the Hub"}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm text-muted-foreground">
                      Username
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="pl-10 bg-surface/50 border-border focus:border-cyan transition-colors"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-muted-foreground">
                    {isLogin ? "Email" : "Email Address"}
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="email"
                      type="email"
                      placeholder={isLogin ? "Email" : "Email Address"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 bg-surface/50 border-border focus:border-cyan transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm text-muted-foreground">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 bg-surface/50 border-border focus:border-cyan transition-colors"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex justify-between items-center text-sm">
                    <button type="button" className="text-cyan hover:underline">
                      Forget Password?
                    </button>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full btn-gradient text-background font-semibold h-11"
                >
                  {isLogin ? "Log In" : "Sign Up"}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  {isLogin ? (
                    <>
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsLogin(false)}
                        className="text-cyan hover:underline font-medium"
                      >
                        Sign Up
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsLogin(true)}
                        className="text-cyan hover:underline font-medium"
                      >
                        Log In
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
