export interface Todo {
    id: number;
    text: string;
    // priority: number; // 낮을수록 높은 우선순위
    completed?: boolean; // 완료 여부(선택 사항)
}
