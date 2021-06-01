import java.util.Date;

public class RealDataProvider implements DataProvider {
  //TODO: Implement this when database is set up

  public RealDataProvider(String id) {
    // Set up database connection here
  }

  @Override
  public String getUUID() {
    // Ping database for id
    return "";
  }

  @Override
  public String getFirstName() {
    return null;
  }

  @Override
  public String getLastName() {
    return null;
  }

  @Override
  public Date getBirthday() {
    return null;
  }

  @Override
  public String getCellPhone() {
    return null;
  }

  @Override
  public String getAddress() {
    return null;
  }

  @Override
  public String getCity() {
    return null;
  }

  @Override
  public String getState() {
    return null;
  }

  @Override
  public String getZipCode() {
    return null;
  }

  @Override
  public String getEmail() {
    return null;
  }

  @Override
  public String getMedicalSymptoms() {
    return null;
  }

  @Override
  public String getMedicineName() {
    return null;
  }

  @Override
  public String getHospitalName() {
    return null;
  }
}
