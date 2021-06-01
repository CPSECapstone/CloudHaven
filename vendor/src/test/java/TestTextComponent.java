import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import javax.json.Json;
import javax.json.JsonObject;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TestTextComponent {

  @Test
  public void testBaseTextComponent() {
    TextComponent tc = null;
    try {
      tc = (TextComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    JsonObject toMatch = Json.createObjectBuilder().add("component", "text").build();
    assertEquals(toMatch, tc.create().build());
  }

  @Test
  public void testTextComponentWithContent() {
    TextComponent tc = null;
    try {
      tc = (TextComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    tc.addContent("example content");
    JsonObject toMatch = Json.createObjectBuilder().add("component", "text").add("content", "example content").build();
    assertEquals(toMatch, tc.create().build());
  }

  @Test
  public void testTextComponentWithLabel() {
    TextComponent tc = null;
    try {
      tc = (TextComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    tc.addLabel("the label");
    JsonObject toMatch = Json.createObjectBuilder().add("component", "text").add("label", "the label").build();
    assertEquals(toMatch, tc.create().build());
  }

  @Test
  public void testTextComponentWithToken() {
    TextComponent tc = null;
    try {
      tc = (TextComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    tc.addToken("UUID TOKEN");
    JsonObject toMatch = Json.createObjectBuilder().add("component", "text").add("token", "UUID TOKEN").build();
    assertEquals(toMatch, tc.create().build());
  }

  @Test
  public void testFullTextComponent() {
    TextComponent tc = null;
    try {
      tc = (TextComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    tc.addToken("UUID TOKEN").addContent("example content").addLabel("the label").addToken("UUID TOKEN");
    JsonObject toMatch = Json.createObjectBuilder()
      .add("component", "text")
      .add("content", "example content")
      .add("label", "the label")
      .add("token", "UUID TOKEN").build();
    assertEquals(toMatch, tc.create().build());
  }
}
