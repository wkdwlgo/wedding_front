// private Long id;

//     private String name; // 작성자 이름
//     private String message; // 방명록 내용
export interface GuestBookDTO {
  get: {
    id: number;
    name: string;
    message: string;
    createdAt: string;
  };
}
