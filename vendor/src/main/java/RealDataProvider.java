import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.util.Locale;

public class RealDataProvider implements DataProvider {
  private ArrayList<String> user;

  // (cloudhaven_id, first_name, last_name, birthday, phone, address, city, state_abbreviation, zip_code, email, ssn)
  private final ArrayList<String> user1 = new ArrayList<String>(List.of("1", "Jane", "Mustang", "2001-09-28", "805-756-2345", "1 Grand Ave", "San Luis Obispo", "CA", "93407", "jmustang@calpoly.edu", "123456789"));
  private final ArrayList<String> user2 = new ArrayList<String>(List.of("2", "Maurice", "Smith", "1980-05-16", "123-456-7891", "123 Canyon Circle", "San Luis Obispo", "CA", "93410", "msmith@test.com", "987654321"));
  private final ArrayList<String> user3 = new ArrayList<String>(List.of("3", "Jack", "Johnson", "1998-07-23", "987-456-7891", "5050 Canyon Crest", "Santa Clara", "CA", "98765", "jj@email.com", "198273465"));

  private final ArrayList<HashMap<String, String>> data = new ArrayList();

  public RealDataProvider(String id) {
    // Set up database connection here
    switch (id) {
      case "2":
        this.user = this.user2;
        break;
      case "3":
        this.user = this.user3;
        break;
      case "1":
      default:
        this.user = this.user1;
    }
  }

  @Override
  public String getUUID() {
    return this.user.get(0);
  }

  @Override
  public String getFirstName() {
    return this.user.get(1);
  }

  @Override
  public String getLastName() {
    return this.user.get(2);
  }

  @Override
  public Date getBirthday() {
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd", Locale.ENGLISH);
    String dateInString = this.user.get(3);
    Date date = new Date();
    try {
      date = formatter.parse(dateInString);
    } catch (Exception e) {
      System.err.println(e.getMessage());
    }
    return date;
  }

  @Override
  public String getCellPhone() {
    return this.user.get(4);
  }

  @Override
  public String getAddress() {
    return this.user.get(5);
  }

  @Override
  public String getCity() {
    return this.user.get(6);
  }

  @Override
  public String getState() {
    return this.user.get(7);
  }

  @Override
  public String getZipCode() {
    return this.user.get(8);
  }


  @Override
  public String getEmail() {
    return this.user.get(9);
  }


  @Override
  public String getMedicalSymptoms() {
    return this.user.get(10);
  }


  @Override
  public String getMedicineName() {
    return this.user.get(11);
  }


  @Override
  public String getHospitalName() {
    return this.user.get(12);
  }
}
