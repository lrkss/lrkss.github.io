package websiteProject.model;

import websiteProject.form.ChoiceForm;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Choices")
public class Choice extends ChoiceForm {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @OneToMany(mappedBy = "choices")
    private Set<TaskChoice> choices = new HashSet<>();

//    @ManyToMany
//    @JoinTable(name = "Task_Choice", joinColumns = {@JoinColumn(name = "choices")}, inverseJoinColumns = {@JoinColumn(name = "id")})
//    private Set<Choice> task_choices = new HashSet<>();
}
