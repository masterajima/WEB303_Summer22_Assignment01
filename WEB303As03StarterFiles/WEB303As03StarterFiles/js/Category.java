

@Entity
@Table(name="categories")
public class Category{
    private Integer id;

//annotation metadata row and colum value of category
@Id
@GenratedValue(strategy=GenrationType.IDENTITY)
@Coulumn(name="category_name")
//global variable
private @NotBlank String categoryName;
private @NotBlank String imgUrl;
private @NotBlank String imgUrl;


    //constructor
    public Category(){}
}
//parameterized constructor
public Category( @NotBlank String categoryName, @NotBlank String description){
    this.categoryName=categoryName;
    this.description=description;
}

public Category( @NotBlank String categoryName, @NotBlank String description,@NotBlank String imgUrl){
    this.categoryName=categoryName;
    this.description=description;
    this.imgUrl=imgUrl;
}
public String getDescription(){
return this.description=description;
}
public String setDescription(){
    this.description=description;
}
public String toString(){
    return "User{category id=" + id + ", category name='" + categoryName + "', description='" + description + "'}";
}
public String getImageUrl(){
    return imgUrl;

}
public void setImageUrl(){
    this.imgUrl=imgUrl;
}
public Integer getId(){
    return id;
}
public void setId(){
    this.id=id;
}