import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TestForm {
  @Test
  public void testSameSeedForms() {
    Form f1 = new Form("1");
    Form f2 = new Form("1");
    assertEquals(f1, f2);
    assertEquals(f1.toSendableJson().build(), f2.toSendableJson().build());
  }

  @Test
  public void testDifferentSeedForms() {
    Form f1 = new Form("2");
    Form f2 = new Form("3");
    // Can't run .equals on rows due to JsonArray issues
    // assertNotEquals(f1, f2);
    assertNotEquals(f1.toSendableJson().build(), f2.toSendableJson().build());
  }
}
