import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, username: "STAR_WARRIOR", level: 4, exp: 1500, badge: "gold" },
    { rank: 2, username: "CODE_WIZARD", level: 3, exp: 1480, badge: "silver" },
    { rank: 3, username: "TECH_SAMURAI", level: 6, exp: 1450, badge: "bronze" },
    { rank: 4, username: "PIXEL_DRIFTER", level: 7, exp: 1420, badge: "purple" },
    { rank: 5, username: "DATA_PHOENIX", level: 8, exp: 1360, badge: "blue" },
    { rank: 6, username: "QUANTUM_QUEEN", level: 1, exp: 1300 },
    { rank: 7, username: "DIGITAL_NOMAD", level: null, exp: 1227 },
    { rank: 8, username: "NULL_POINTER", level: 10, exp: 1244 },
  ];

  const getBadgeIcon = (badge: string | undefined) => {
    if (badge === "gold") return <Trophy className="text-yellow-500" size={20} />;
    if (badge === "silver") return <Medal className="text-gray-400" size={20} />;
    if (badge === "bronze") return <Award className="text-orange-600" size={20} />;
    return null;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-orange-600";
    return "text-muted-foreground";
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl font-bold">Global Leaderboard</CardTitle>
              <Trophy className="text-cyan" size={32} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium text-muted-foreground border-b border-border/30">
                <div className="col-span-2">Rank</div>
                <div className="col-span-5">Username</div>
                <div className="col-span-2 text-center">Level</div>
                <div className="col-span-3 text-right">Rating</div>
              </div>

              {/* Leaderboard entries */}
              {leaderboardData.map((entry) => (
                <div
                  key={entry.rank}
                  className={`grid grid-cols-12 gap-4 px-4 py-4 rounded-lg transition-all hover:bg-surface/50 ${
                    entry.rank <= 3 ? "bg-gradient-to-r from-surface/40 to-surface/20" : ""
                  }`}
                >
                  <div className="col-span-2 flex items-center gap-2">
                    {entry.rank <= 3 ? (
                      <div className="flex items-center gap-2">
                        {getBadgeIcon(entry.badge)}
                        <span className={`font-bold ${getRankColor(entry.rank)}`}>
                          {entry.rank}
                        </span>
                      </div>
                    ) : (
                      <span className="font-medium text-muted-foreground">{entry.rank}</span>
                    )}
                  </div>

                  <div className="col-span-5 flex items-center gap-2">
                    <span className="font-medium">{entry.username}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    {entry.level && (
                      <Badge
                        variant="outline"
                        className="bg-gradient-to-r from-cyan/20 to-purple/20 border-cyan/30"
                      >
                        {entry.level}
                      </Badge>
                    )}
                  </div>

                  <div className="col-span-3 flex items-center justify-end">
                    <span className="font-bold text-cyan">{entry.exp} EXP</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Leaderboard;
