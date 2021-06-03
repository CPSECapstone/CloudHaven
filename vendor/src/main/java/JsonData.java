import javax.json.JsonObjectBuilder;

public interface JsonData {
  public JsonObjectBuilder toSendableJson();
}
