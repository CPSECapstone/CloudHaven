import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;

public class Form extends GeneratedPage implements JsonData {
  private final JsonArrayBuilder fields;
  private final String title;

  public Form() {
    super();
    int numFields = faker.number().numberBetween(4, 9);
    title = faker.medical().hospitalName();
    this.fields = Json.createArrayBuilder();
    for (int i = 0; i < numFields; i++) {
      TextInputComponent field = TextInputComponent.getComponent();
      field.addLabel(faker.internet().slug());
      if (faker.bool().bool()) {
        field.isSensitive();
      }
      if (faker.bool().bool()) {
        field.isRequired();
      }
      if (faker.bool().bool()) {
        field.addMatch( "[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+");
      }
      fields.add(field.create());
    }
  }


  public Form (String token) {
    super(token);
    int numFields = faker.number().numberBetween(4, 9);
    title = faker.medical().hospitalName();
    this.fields = Json.createArrayBuilder();
    for (int i = 0; i < numFields; i++) {
      TextInputComponent field = TextInputComponent.getComponent();
      field.addLabel(faker.internet().slug());
      if (faker.bool().bool()) {
        field.isSensitive();
      }
      if (faker.bool().bool()) {
        field.isRequired();
      }
      if (faker.bool().bool()) {
        field.addMatch( "[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+");
      }
      fields.add(field.create());
    }
  }

  @Override
  protected JsonObjectBuilder seed(String token) {
    Form f = new Form(token);
    return f.toSendableJson();
  }

  @Override
  public JsonObjectBuilder toSendableJson() {
    return Json.createObjectBuilder()
      .add("component", "form")
      .add("title", title)
      .add("fields", fields);
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Form form = (Form) o;
    return fields.build().equals(form.fields.build()) && title.equals(form.title);
  }

}
