//비트 연산자
/*
AND 비트 연산자 & : 0이 하나라도 있으면 결괏값이 0
NOT 비트 연산자 ~ : 비트 값의 반대값을 반환 0이면 1로 1이면 0으로
OR 비트 연산자 | : 1이 하나만 있어도 1
XOR 비트 연산자 ^ : 배타적으로 1인 경우에만 1을 반환
                    ex) 1110 XOR 1011 = 0101
<< 비트 연산자 a << b : b 비트의 자릿수만큼 왼쪽으로 이동하고 오른쪽은 0으로 채움.
>> 비트 연산자 a >> b : b 비트의 자릿수만큼 오른쪽으로 이동하고 오른쪽 남은 비트는 버림.
>>> 비트 연산자 a >>> b : b 비트만큼 오른쪽으로 이동하고 오른쪽 남은 비트는 버리고 왼쪽의 빈자리는 0으로 채움.
*/

// .toString(2)를 활용하면 이진수로 변환할 수 있다. 