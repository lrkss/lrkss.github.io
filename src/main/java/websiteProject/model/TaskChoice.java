package websiteProject.model;


import websiteProject.form.TaskChoiceForm;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Task_Choice")
public class TaskChoice implements Serializable {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;

    @EmbeddedId
    private TaskChoicePK taskChoicePK_id;

    @ManyToOne
    @MapsId("tasks_id") //This is the name of attr in EmployerDeliveryAgentPK class
    @JoinColumn(name = "tasks_id")
    private Task tasks;

    @ManyToOne
    @MapsId("choices_id")
    @JoinColumn(name = "choices_id")
    private Choice choices;

    @Column(name = "answer", nullable = false)
    private boolean answer;

//    @ManyToMany(mappedBy = "taskchoices")
//    private Set<TaskChoice> tasks = new HashSet<>();
//
//    @ManyToMany(mappedBy = "task_choices")
//    private Set<TaskChoice> choices = new HashSet<>();

//    @Column(name = "answer", nullable = false)
//    private Choice answer;

//    @Column(name = "task", nullable = false)
//    private Task task;

//    @ManyToMany(targetEntity = Task.class)
//    @JoinTable(name = "Tasks", joinColumns = {@JoinColumn(name = "tasks_id")}, inverseJoinColumns = {@JoinColumn(name = "id")})
//    private Set<Task> tasks = new HashSet<>();
//
//    @ManyToMany(targetEntity = Choice.class)
//    @JoinTable(name = "Choices", joinColumns = {@JoinColumn(name = "choices_id")}, inverseJoinColumns = {@JoinColumn(name = "id")})
//    private Set<Choice> choices = new HashSet<>();
}
