import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import javax.json.Json;
import javax.json.JsonObject;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TestTextInputComponent {

  @Test
  public void testBaseTextInputComponent() {
    TextInputComponent tic = null;
    try {
      tic = (TextInputComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT_INPUT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    JsonObject toMatch = Json.createObjectBuilder().add("component", "textInputField").build();
    assertEquals(toMatch, tic.create().build());
  }

  @Test
  public void testTextComponentWithLabel() {
    TextInputComponent tic = null;
    try {
      tic = (TextInputComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT_INPUT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    tic.addLabel("the label");
    JsonObject toMatch = Json.createObjectBuilder().add("component", "textInputField").add("label", "the label").build();
    assertEquals(toMatch, tic.create().build());
  }

  @Test
  public void testTextComponentWithSensitive() {
    TextInputComponent tic = null;
    try {
      tic = (TextInputComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT_INPUT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    tic.isSensitive();
    JsonObject toMatch = Json.createObjectBuilder().add("component", "textInputField").add("sensitive", true).build();
    assertEquals(toMatch, tic.create().build());
  }

  @Test
  public void testTextComponentWithRequired() {
    TextInputComponent tic = null;
    try {
      tic = (TextInputComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT_INPUT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    tic.isRequired();
    JsonObject toMatch = Json.createObjectBuilder().add("component", "textInputField").add("required", true).build();
    assertEquals(toMatch, tic.create().build());
  }

  @Test
  public void testTextComponentWithMatch() {
    TextInputComponent tic = null;
    try {
      tic = (TextInputComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT_INPUT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    tic.addMatch("example regex");
    JsonObject toMatch = Json.createObjectBuilder().add("component", "textInputField").add("match", "example regex").build();
    assertEquals(toMatch, tic.create().build());
  }

  @Test
  public void testFullTextComponent() {
    TextInputComponent tic = null;
    try {
      tic = (TextInputComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT_INPUT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    tic.addLabel("the label").isSensitive().isRequired().addMatch("example regex");
    JsonObject toMatch = Json.createObjectBuilder()
      .add("component", "textInputField")
      .add("label", "the label")
      .add("sensitive", true)
      .add("required", true)
      .add("match", "example regex").build();
    assertEquals(toMatch, tic.create().build());
  }
}
