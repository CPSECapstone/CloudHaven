import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TestTable {
  @Test
  public void testSameSeedTables() {
    Table t1 = new Table("1");
    Table t2 = new Table("1");
    assertEquals(t1.toSendableJson().build(), t2.toSendableJson().build());
  }

  @Test
  public void testDifferentSeedTables() {
    Table t1 = new Table("2");
    Table t2 = new Table("3");
    assertNotEquals(t1.toSendableJson().build(), t2.toSendableJson().build());
  }
}
