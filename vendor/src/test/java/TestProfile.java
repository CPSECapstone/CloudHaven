import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TestProfile {
  @Test
  public void testSameSeedProfiles() {
    Profile p1 = new Profile("1", true);
    Profile p2 = new Profile("1", true);
    assertEquals(p1, p2);
    assertEquals(p1.toSendableJson().build(), p2.toSendableJson().build());
  }

  @Test
  public void testDifferentSeedProfiles() {
    Profile p1 = new Profile("2", true);
    Profile p2 = new Profile("3", true);
    assertNotEquals(p1, p2);
    assertNotEquals(p1.toSendableJson().build(), p2.toSendableJson().build());
  }
}
