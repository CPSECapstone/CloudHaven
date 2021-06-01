import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TestComponentFactory {

  @Test
  public void testUnsupportedComponentType() {
    Throwable exception = assertThrows(ComponentFactory.UnsupportedType.class, () -> {
      ComponentFactory.makeComponent(ComponentFactory.Type.UNSUPPORTED);
    });
    assertEquals("Unsupported Component Type", exception.getMessage());
  }

  @Test
  public void testMakeTextComponent() {
    Component c = null;
    try {
      c = ComponentFactory.makeComponent(ComponentFactory.Type.TEXT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    assertTrue(c instanceof TextComponent);
  }

  @Test
  public void testMakeTextInputFieldComponent() {
    Component c = null;
    try {
      c = ComponentFactory.makeComponent(ComponentFactory.Type.TEXT_INPUT);
    } catch (ComponentFactory.UnsupportedType e) {
      fail();
    }
    assertTrue(c instanceof TextInputComponent);
  }
}
