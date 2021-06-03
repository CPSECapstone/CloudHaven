import javax.json.Json;
import javax.json.JsonObjectBuilder;

public class ButtonComponent implements Component {

  private JsonObjectBuilder component;

  public static ButtonComponent getComponent() {
    try {
      return (ButtonComponent) ComponentFactory.makeComponent(ComponentFactory.Type.BUTTON);
    } catch (ComponentFactory.UnsupportedType unsupportedType) {
      unsupportedType.printStackTrace();
    }
    return null;
  }

  public ButtonComponent() {
    this.component = Json.createObjectBuilder().add("component", "button");
  }

  public ButtonComponent addLabel(String label) {
    this.component.add("label", label);
    return this;
  }

  @Override
  public JsonObjectBuilder create() {
    return component;
  }
}
