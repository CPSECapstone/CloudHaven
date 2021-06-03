import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;

public class Forms extends GeneratedPage implements JsonData {

  private final JsonArrayBuilder associatedForms;

  public Forms () {
    super();
    int numForms = faker.number().numberBetween(2, 5);
    this.associatedForms = Json.createArrayBuilder();
    for (int i = 0; i < numForms; i++) {
      associatedForms.add(String.format("form/%s", provider.getHospitalName()));
    }
  }

  public Forms (String token, Boolean random) {
    super(token, random);
    int numForms = faker.number().numberBetween(2, 6);
    this.associatedForms = Json.createArrayBuilder();
    for (int i = 0; i < numForms; i++) {
      associatedForms.add(String.format("form/%s", faker.internet().slug()));
    }
  }

  @Override
  protected JsonObjectBuilder seed(String token) {
    Forms forms = new Forms(token, true);
    return forms.toSendableJson();
  }

  @Override
  public JsonObjectBuilder toSendableJson() {
    return Json.createObjectBuilder()
      .add("forms", associatedForms);
  }
}
