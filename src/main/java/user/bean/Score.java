package user.bean;


import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Setter
@Getter
public class Score {
    private Double totalScore;
    private int voteCount;
    private Double averageScore;

    public void calulateAverageScore(Double score) {
        totalScore+=score;
        voteCount+=1;
        averageScore=totalScore/voteCount;
    }
}
