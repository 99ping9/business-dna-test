export type QuestionType =
    | "Architect"
    | "Messenger"
    | "Analyst"
    | "Pacemaker"
    | "Connector"
    | "Artisan"
    | "Tester"
    | "Healer";

export interface Question {
    id: number;
    text: string;
    type: QuestionType;
}

export const questions: Question[] = [
    // 1. 설계자 (Architect) - 매뉴얼/시스템/자동화
    { id: 1, text: "나는 일을 시작하기 전에 체계적인 계획과 메뉴얼을 만드는 것을 선호한다.", type: "Architect" },
    { id: 2, text: "반복되는 업무는 시스템이나 도구를 활용해 자동화하려고 노력한다.", type: "Architect" },
    { id: 3, text: "즉흥적인 대처보다는 미리 정해진 프로세스를 따르는 것이 편하다.", type: "Architect" },

    // 2. 메신저 (Messenger) - 글쓰기/말하기/내 생각이 상품
    { id: 4, text: "나의 경험과 생각을 글이나 말로 표현하여 타인에게 전달하는 것을 즐긴다.", type: "Messenger" },
    { id: 5, text: "사람들이 내 이야기를 듣고 공감하거나 영감을 받을 때 보람을 느낀다.", type: "Messenger" },
    { id: 6, text: "나만의 독창적인 관점이나 스토리가 비즈니스의 핵심 자산이라고 생각한다.", type: "Messenger" },

    // 3. 분석가 (Analyst) - 기획의도/트렌드/가치제안
    { id: 7, text: "어떤 현상을 볼 때 그 이면에 숨겨진 기획 의도나 원리를 파악하려 한다.", type: "Analyst" },
    { id: 8, text: "최신 트렌드를 분석하고 미래의 흐름을 예측하는 것을 좋아한다.", type: "Analyst" },
    { id: 9, text: "논리적인 근거와 데이터를 바탕으로 설득력 있는 가치를 제안하는 편이다.", type: "Analyst" },

    // 4. 페이스메이커 (Pacemaker) - 동료/응원/완주
    { id: 10, text: "혼자 성과를 내는 것보다 동료와 함께 목표를 달성하는 과정이 더 중요하다.", type: "Pacemaker" },
    { id: 11, text: "타인의 성장을 돕고 응원하는 역할에서 큰 에너지를 얻는다.", type: "Pacemaker" },
    { id: 12, text: "중도에 포기하지 않고 끝까지 완주할 수 있도록 돕는 러닝메이트가 되고 싶다.", type: "Pacemaker" },

    // 5. 커넥터 (Connector) - 소개/결합/판 짜기
    { id: 13, text: "서로 다른 분야의 사람이나 아이디어를 연결하여 새로운 기회를 만드는 것을 즐긴다.", type: "Connector" },
    { id: 14, text: "좋은 사람이나 유용한 정보를 주변에 소개하고 공유하는 것을 좋아한다.", type: "Connector" },
    { id: 15, text: "직접 플레이어가 되기보다 사람들이 모일 수 있는 장(판)을 만드는 것에 관심이 많다.", type: "Connector" },

    // 6. 장인 (Artisan) - 디테일/퀄리티 집착/나만의 선
    { id: 16, text: "남들이 보지 못하는 디테일한 부분까지 신경 써서 완성도를 높인다.", type: "Artisan" },
    { id: 17, text: "타협하지 않는 나만의 높은 품질 기준과 철학을 가지고 있다.", type: "Artisan" },
    { id: 18, text: "빠른 성과보다는 시간이 걸리더라도 완벽한 결과물을 만들어내는 것이 중요하다.", type: "Artisan" },

    // 7. 테스터 (Tester) - 일단 실행/가설 검증/실전 데이터
    { id: 19, text: "완벽한 계획보다는 일단 실행해보면서 부딪히는 것을 선호한다.", type: "Tester" },
    { id: 20, text: "가설을 세우고 실제 시장 반응을 통해 검증하는 과정을 즐긴다.", type: "Tester" },
    { id: 21, text: "이론적인 공부보다는 실전 경험을 통해 얻은 데이터를 더 신뢰한다.", type: "Tester" },

    // 8. 힐러 (Healer) - 속마음/에고 내려놓기/근본적 변화
    { id: 22, text: "사람들의 겉모습보다는 내면의 깊은 고민과 속마음에 귀 기울인다.", type: "Healer" },
    { id: 23, text: "성과나 경쟁보다는 자아 성찰과 내면의 평화를 중요하게 생각한다.", type: "Healer" },
    { id: 24, text: "타인의 근본적인 변화와 치유를 돕는 일에 소명감을 느낀다.", type: "Healer" },
];
