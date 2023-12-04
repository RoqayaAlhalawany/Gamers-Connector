package com.partyup.payload;

public class AnswerDto {

    private Long id;     // The ID of the question
    private int answer;  // The answer value

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getAnswer() {
        if (answer < 1) answer = 1;  // Ensure the answer value is not less than 1
        if (answer > 5) answer = 5;  // Ensure the answer value is not greater than 5
        return answer;
    }

    public void setAnswer(int answer) {
        this.answer = answer;
    }
}
