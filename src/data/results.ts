import type { QuestionType } from "./questions";
import { Settings, Mic, TrendingUp, Flag, Share2, Hammer, FlaskConical, Smile, type LucideIcon } from "lucide-react";

export interface ResultContent {
    type: QuestionType;
    title: string;
    description: string;
    icon: LucideIcon;
    quote: string;
    tags: string[];
    bookRecommendation: string;
}

export const results: Record<QuestionType, ResultContent> = {
    Architect: {
        type: "Architect",
        title: "설계자 (Architect)",
        description: "당신은 체계적인 시스템을 구축하여 안정적인 성과를 만들어내는 비즈니스 설계자입니다.",
        icon: Settings,
        quote: "의지력이 아닌 시스템으로 결과를 만드는 설계자",
        tags: ["#시스템화", "#프로세스", "#효율성"],
        bookRecommendation: "아주 작은 습관의 힘 - 제임스 클리어",
    },
    Messenger: {
        type: "Messenger",
        title: "메신저 (Messenger)",
        description: "당신은 자신만의 독특한 관점과 스토리를 통해 타인에게 영감을 주는 메신저입니다.",
        icon: Mic,
        quote: "나만의 관점을 수익화하는 인사이트 메신저",
        tags: ["#스토리텔링", "#퍼스널브랜딩", "#영감"],
        bookRecommendation: "백만장자 메신저 - 브렌든 버처드",
    },
    Analyst: {
        type: "Analyst",
        title: "분석가 (Analyst)",
        description: "당신은 데이터와 트렌드를 꿰뚫어보며 지적인 가치를 제안하는 통찰력 있는 분석가입니다.",
        icon: TrendingUp,
        quote: "데이터 너머의 삶을 디자인하는 지적인 제안자",
        tags: ["#인사이트", "#트렌드분석", "#기획력"],
        bookRecommendation: "팩트풀니스 - 한스 로슬링",
    },
    Pacemaker: {
        type: "Pacemaker",
        title: "페이스메이커 (Pacemaker)",
        description: "당신은 타인의 성장을 돕고 함께 완주하는 든든한 동반자이자 페이스메이커입니다.",
        icon: Flag,
        quote: "끝까지 하게 만드는 힘, 성장의 페이스메이커",
        tags: ["#동기부여", "#커뮤니티", "#러닝메이트"],
        bookRecommendation: "기브 앤 테이크 - 애덤 그랜트",
    },
    Connector: {
        type: "Connector",
        title: "커넥터 (Connector)",
        description: "당신은 사람과 기회를 연결하여 새로운 시너지를 창출하는 판을 짜는 커넥터입니다.",
        icon: Share2,
        quote: "사람과 기회를 연결해 시너지를 만드는 판 설계자",
        tags: ["#네트워킹", "#플랫폼", "#연결의힘"],
        bookRecommendation: "친구의 친구 - 데이비드 버커스",
    },
    Artisan: {
        type: "Artisan",
        title: "장인 (Artisan)",
        description: "당신은 타협하지 않는 높은 기준과 디테일로 최고의 퀄리티를 만들어내는 장인입니다.",
        icon: Hammer,
        quote: "타협 없는 퀄리티로 세상을 놀라게 하는 완벽주의자",
        tags: ["#장인정신", "#퀄리티", "#전문성"],
        bookRecommendation: "몰입 - 황농문",
    },
    Tester: {
        type: "Tester",
        title: "테스터 (Tester)",
        description: "당신은 빠른 실행력으로 가설을 검증하고 실전 데이터를 통해 성장하는 테스터입니다.",
        icon: FlaskConical,
        quote: "될 놈인지 먼저 테스트하는 실전 검증 전문가",
        tags: ["#실행력", "#가설검증", "#피벗"],
        bookRecommendation: "린 스타트업 - 에릭 리스",
    },
    Healer: {
        type: "Healer",
        title: "힐러 (Healer)",
        description: "당신은 사람들의 내면을 치유하고 잠재력을 깨우는 따뜻한 조력자이자 힐러입니다.",
        icon: Smile,
        quote: "에고를 내려놓고 잠재력의 근원을 깨우는 조력자",
        tags: ["#마인드셋", "#코칭", "#내적성장"],
        bookRecommendation: "데일 카네기 인간관계론 - 데일 카네기",
    },
};
