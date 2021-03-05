package websiteProject.model;

import websiteProject.form.TaskForm;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Tasks")
public class Task {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @OneToMany(mappedBy = "tasks")
    private Set<TaskChoice> taskchoices = new HashSet<>();

//    @ManyToMany
//    @JoinTable(name = "Task_Choice", joinColumns = {@JoinColumn(name = "taskchoice_id")}, inverseJoinColumns = {@JoinColumn(name = "id")})
//    private Set<Choice> taskchoices = new HashSet<>();

//    @ManyToMany
//    @JoinTable(name = "Task_Choice", joinColumns = {@JoinColumn(name = "tasks")}, inverseJoinColumns = {@JoinColumn(name = "id")})
//    private Set<Task> taskchoices = new HashSet<>();
}
