-- 본드 샘플 데이터 생
SELECT * FROM "GROUP";

INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 1, '근육빵빵', DEFAULT, NULL, '근육맨이되는 그날까지', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 2, '손으로 사부작', DEFAULT, NULL, '손으로 만드는건 다한다', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 3, '롤링롤링', DEFAULT, NULL, '브론즈 미만잡 안받아요', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 4, '보라빛향기', DEFAULT, NULL, '진, 뷔, 제이홉, 슈가, 정국, RM, 지민 영원히 보라보라해', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 5, '위아리스트베이비', DEFAULT, NULL, '모든 아티스트들 환영합니다', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 6, '내고향 6시', DEFAULT, NULL, '아침 6시 일어나 개밥줘 소밥줘 할머니 밥 차려드려 깨밭에 가서 깨 털어', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 7, '불멍타임', DEFAULT, NULL, '캠핑을 사랑하는 사람 모두 환영합니다', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 8, '집밥 선생', DEFAULT, NULL, '우리집에서는 내가 백선생 슈가러버', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 9, '씨드머니 급구', DEFAULT, NULL, '월급쟁이를 벗어나고 싶은 투자자들 모여라', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 10, '포토마니아', DEFAULT, NULL, '인물, 자연, 음식 등 모든 것을 사진으로 남기세요', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 11, '내 방 꼬라지', DEFAULT, NULL, '내 방 셀프 인테리어는 내가 한다', 'Y', 0);
INSERT INTO "GROUP" VALUES(SEQ_GROUP_NO.NEXTVAL, 12, '개발새발', DEFAULT, NULL, '개발새발이지만 타이핑은 할 줄 알아요. 영타 100은 나와야 가입 가능', 'Y', 0);

UPDATE "GROUP" SET TOPIC_CODE=12 WHERE GROUP_NO =1;

COMMIT;

-- 내가 가입한 본드 조회
SELECT * FROM MEMBER_JOIN;

INSERT INTO "MEMBER_JOIN" VALUES(SEQ_MEMBER_JOIN_NO.NEXTVAL, 3, 1, 'N', DEFAULT, 0, NULL);
INSERT INTO "MEMBER_JOIN" VALUES(SEQ_MEMBER_JOIN_NO.NEXTVAL, 4, 1, 'N', DEFAULT, 0, NULL);
INSERT INTO "MEMBER_JOIN" VALUES(SEQ_MEMBER_JOIN_NO.NEXTVAL, 5, 1, 'N', DEFAULT, 0, NULL);
INSERT INTO "MEMBER_JOIN" VALUES(SEQ_MEMBER_JOIN_NO.NEXTVAL, 6, 1, 'N', DEFAULT, 0, NULL);
INSERT INTO "MEMBER_JOIN" VALUES(SEQ_MEMBER_JOIN_NO.NEXTVAL, 1, 2, 'N', DEFAULT, 0, NULL);


SELECT G.GROUP_NO, GROUP_NAME, 
	(SELECT COUNT(*) FROM MEMBER_JOIN M
	WHERE M.GROUP_NO = G.GROUP_NO) MEMBER_COUNT,
	(SELECT GROUP_IMG_PATH || GROUP_IMG_RENAME FROM GROUP_IMG GI
	WHERE GI.GROUP_NO = G.GROUP_NO) GROUP_IMG
FROM "GROUP" G
JOIN MEMBER_JOIN M ON(M.GROUP_NO = G.GROUP_NO)
WHERE MEMBER_NO = 1;

SELECT * FROM "GROUP";
SELECT * FROM GROUP_IMG;

SELECT COUNT(MEMBER_NO) FROM MEMBER_JOIN
WHERE GROUP_NO = 1;

SELECT GROUP_NAME, GROUP_COMMENT,
	(SELECT COUNT(MEMBER_NO) FROM MEMBER_JOIN M
	WHERE M.GROUP_NO = G.GROUP_NO) MEMBER_COUNT,
	(SELECT GROUP_IMG_PATH || GROUP_IMG_RENAME FROM GROUP_IMG GI
	WHERE GI.GROUP_NO = G.GROUP_NO) GROUP_IMG
FROM "GROUP" G
WHERE GROUP_NO = 1;

-- INSERT INTO 이미지테이블 VALUES(이미지번호, 이미지경로, 이미지리네임, 이미지오리지널, 이미지순서, 게시판번호)
INSERT INTO GROUP_IMG VALUES(SEQ_GROUP_IMG_NO.NEXTVAL, 1, 'coding.jpg','20221118105843_00001.jpg', '/resources/images/bond/profile/');
INSERT INTO GROUP_IMG VALUES(SEQ_GROUP_IMG_NO.NEXTVAL, 3, 'health.jpeg','20221118105843_00002.jpg', '/resources/images/bond/profile/');

INSERT INTO BOARD_IMG
VALUES(SEQ_IMG_NO.NEXTVAL, '/resources/images/board/',
'20221116105843_00002.gif', '2.gif', 1 , 1998);

COMMIT;

SELECT * FROM MEMBER_IMG;
