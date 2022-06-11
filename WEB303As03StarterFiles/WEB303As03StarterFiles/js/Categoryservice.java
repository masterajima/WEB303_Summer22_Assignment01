//create service category that update delete edit repo
public class CategoryService{
    private Categoryrepository categoryrepository;
    
    //retrive all repository
    public List<Category>listCategories(){
        return categoryrepository.findAll();
    }
    //save repository
    public void createCategory(){
        categoryrepository.save(category);
    }
//find repository by category name
   public Category readCategory(Integer categoryId){
    return categoryrepository.findByCategoryName(categoryName);

   } 
   public Optional<Category>readCategory(Integer categoryId){

   }

}