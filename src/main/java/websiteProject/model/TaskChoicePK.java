package websiteProject.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class TaskChoicePK implements Serializable {
    @Column(name = "tasks_id")
    private Long tasks_id;

    @Column(name = "choices_id")
    private Long choices_id;
}
