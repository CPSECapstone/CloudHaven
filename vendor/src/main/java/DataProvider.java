import java.util.Date;

public interface DataProvider {
  public String getUUID();

  public String getFirstName();
  public String getLastName();
  public Date getBirthday();
  public String getCellPhone();
  public String getAddress();
  public String getCity();
  public String getState();
  public String getZipCode();
  public String getEmail();

  public String getMedicalSymptoms();
  public String getMedicineName();
  public String getHospitalName();
}
