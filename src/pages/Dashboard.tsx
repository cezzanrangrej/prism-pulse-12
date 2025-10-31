import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Search, Trophy, CheckCircle2, Target, TrendingUp, Github, Code, ListTodo } from "lucide-react";

const Dashboard = () => {
  const activities = [
    { icon: Code, title: "Completed LeetCode: Two Sum", subtitle: "Solved 5 tasks on", time: "Earned 150 EXP", color: "text-purple" },
    { icon: CheckCircle2, title: "Solved 5 tasks on", subtitle: "Earned 150 EXP", time: "2h ago", color: "text-cyan" },
    { icon: Code, title: "Completed LeetCode on Medium", subtitle: "Earned 150 EXP", time: "3h ago", color: "text-purple" },
  ];

  const platforms = [
    { name: "Github", icon: "github", connected: true },
    { name: "LeetCode", icon: "leetcode", connected: true },
    { name: "Frontend Mentor", icon: "frontend", connected: true },
    { name: "Todoist", icon: "todoist", connected: true },
    { name: "Discord", icon: "discord", connected: true },
    { name: "Slack", icon: "slack", connected: false },
  ];

  return (
    <DashboardLayout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Activity Feed */}
        <Card className="glass-card border-border/50 md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Activity Feed</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Panintrakiblerqgn"
                className="w-full pl-10 pr-4 py-2 bg-surface/50 border border-border rounded-lg text-sm focus:border-cyan outline-none transition-colors"
              />
            </div>

            <div className="space-y-3">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={index}
                    className="p-3 bg-gradient-to-br from-surface/80 to-surface/40 rounded-lg border border-border/30 hover:border-cyan/30 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-surface-light ${activity.color}`}>
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-tight mb-1">
                          {activity.title}
                        </p>
                        <p className="text-xs text-cyan">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle>Stats Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="hsl(var(--surface-light))"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(1250 / 2000) * 352} 352`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(189, 100%, 50%)" />
                      <stop offset="100%" stopColor="hsl(293, 84%, 58%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">1250</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="text-cyan" size={18} />
                  <span className="text-sm text-muted-foreground">Total EXP:</span>
                </div>
                <span className="font-semibold">85</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ListTodo className="text-cyan" size={18} />
                  <span className="text-sm text-muted-foreground">Tasks Completed:</span>
                </div>
                <span className="font-semibold">42 Problems Solved</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Goals */}
        <Card className="glass-card border-border/50 md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Goals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Complete 100 LeetCode Mediums</span>
              </div>
              <Progress value={42} className="h-2 bg-surface-light" />
              <div className="text-xs text-muted-foreground text-right">42/100</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Read 5 Tech Books</span>
              </div>
              <Progress value={20} className="h-2 bg-surface-light" />
              <div className="text-xs text-muted-foreground text-right">1/5</div>
            </div>
          </CardContent>
        </Card>

        {/* Top Skills */}
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🐍</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">JavaScript</span>
                  </div>
                  <Progress value={85} className="h-2 bg-surface-light" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🎨</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">React</span>
                  </div>
                  <Progress value={70} className="h-2 bg-surface-light" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connected Platforms */}
        <Card className="glass-card border-border/50 md:col-span-2">
          <CardHeader>
            <CardTitle>Connected Platforms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                    platform.connected
                      ? "bg-gradient-to-br from-cyan/20 to-purple/20"
                      : "bg-surface/50 opacity-50"
                  }`}
                >
                  {platform.connected && (
                    <Github className="text-cyan" size={24} />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
