import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Code, Eye, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Connections = () => {
  const [showKey, setShowKey] = useState(false);
  const { toast } = useToast();

  const handleConnect = (platform: string) => {
    toast({
      title: "Platform Connected",
      description: `Successfully connected to ${platform}!`,
    });
  };

  const statsPlatforms = [
    { name: "Githuat", icon: Github, type: "oauth" },
    { name: "LeetCode", icon: Code, type: "credentials" },
  ];

  const taskPlatforms = [
    { name: "LodoLoale", icon: CheckCircle },
    { name: "Todoist", icon: CheckCircle },
    { name: "Jira", icon: CheckCircle },
    { name: "Jira", icon: CheckCircle },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Platform Connections</h1>
          <p className="text-muted-foreground">Connect your accounts to track your development activity</p>
        </div>

        <Tabs defaultValue="stats" className="space-y-6">
          <TabsList className="glass-card border-border/50 p-1">
            <TabsTrigger value="stats" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan/20 data-[state=active]:to-purple/20">
              Stats Platforms
            </TabsTrigger>
            <TabsTrigger value="tasks" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan/20 data-[state=active]:to-purple/20">
              Task Platforms
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* GitHub OAuth */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Github className="text-cyan" size={24} />
                    <span>Githuat</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full btn-gradient text-background font-semibold"
                    onClick={() => handleConnect("GitHub")}
                  >
                    Connect via OAuth
                  </Button>
                </CardContent>
              </Card>

              {/* LeetCode Credentials */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Code className="text-purple" size={24} />
                    <span>LeetCode</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Username"
                      className="bg-surface/50 border-border focus:border-cyan"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="key" className="text-sm">Key</Label>
                    <div className="relative">
                      <Input
                        id="key"
                        type={showKey ? "text" : "password"}
                        placeholder="Key"
                        className="bg-surface/50 border-border focus:border-cyan pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowKey(!showKey)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>

                  <Button 
                    className="w-full btn-gradient text-background font-semibold"
                    onClick={() => handleConnect("LeetCode")}
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tasks">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Stats Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {taskPlatforms.map((platform, index) => {
                    const Icon = platform.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-surface/30 rounded-lg border border-border/30 hover:border-cyan/30 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-surface-light">
                            <Icon className="text-cyan" size={20} />
                          </div>
                          <span className="font-medium">{platform.name}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cyan/30 hover:bg-cyan/10"
                          onClick={() => handleConnect(platform.name)}
                        >
                          Connect
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Connections;
