import javax.json.Json;
import javax.json.JsonObjectBuilder;
import java.util.Date;
import java.text.SimpleDateFormat;

public class Profile extends GeneratedPage implements JsonData {
  private final String fName;
  private final String lName;
  private final Date birthday;
  private final String cell;
  private final String address;
  private final String city;
  private final String state;
  private final String zip;
  private final String email;
  private final String identifier;
  private final String ssnToken;
  private final SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");

  public Profile() {
    super();
    this.fName = faker.name().firstName();
    this.lName = faker.name().lastName();
    this.birthday = faker.date().birthday();
    this.cell = faker.phoneNumber().cellPhone();
    this.address = faker.address().streetAddress(faker.bool().bool());
    this.city = faker.address().city();
    this.state = faker.address().state();
    this.zip = faker.address().zipCode();
    this.email = faker.internet().emailAddress();
    this.identifier = randomUUID();
    this.ssnToken = randomUUID();
  }
  public Profile(String token) {
    super(token);
    this.fName = faker.name().firstName();
    this.lName = faker.name().lastName();
    this.birthday = faker.date().birthday();
    this.cell = faker.phoneNumber().cellPhone();
    this.address = faker.address().streetAddress(faker.bool().bool());
    this.city = faker.address().city();
    this.state = faker.address().state();
    this.zip = faker.address().zipCode();
    this.email = faker.internet().emailAddress();
    this.identifier = randomUUID();
    this.ssnToken = randomUUID();
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Profile profile = (Profile) o;
    return fName.equals(profile.fName) && lName.equals(profile.lName) && birthday.equals(profile.birthday) && cell.equals(profile.cell) && address.equals(profile.address) && city.equals(profile.city) && state.equals(profile.state) && zip.equals(profile.zip) && email.equals(profile.email) && identifier.equals(profile.identifier) && ssnToken.equals(profile.ssnToken);
  }

  @Override
  protected JsonObjectBuilder seed(String token) {
    Profile p = new Profile(token);
    return p.toSendableJson();
  }

  @Override
  public JsonObjectBuilder toSendableJson() {
    return Json.createObjectBuilder()
      .add("components", Json.createArrayBuilder()
        .add(TextComponent.getComponent().addContent("Profile Page").create())
        .add(TextComponent.getComponent().addLabel("first-name").addContent(fName).create())
        .add(TextComponent.getComponent().addLabel("last-name").addContent(lName).create())
        .add(TextComponent.getComponent().addLabel("birthday").addContent(formatter.format(birthday)).create())
        .add(TextComponent.getComponent().addLabel("phone-number").addContent(cell).create())
        .add(TextComponent.getComponent().addLabel("street-address").addContent(address).create())
        .add(TextComponent.getComponent().addLabel("city").addContent(city).create())
        .add(TextComponent.getComponent().addLabel("state").addContent(state).create())
        .add(TextComponent.getComponent().addLabel("zipcode").addContent(zip).create())
        .add(TextComponent.getComponent().addLabel("email").addContent(email).create())
        .add(TextComponent.getComponent().addLabel("identifier").addContent(identifier).create())
        .add(TextComponent.getComponent().addLabel("ssn").addContent(ssnToken).create())
      );
  }
}
