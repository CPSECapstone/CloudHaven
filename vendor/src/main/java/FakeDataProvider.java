import com.github.javafaker.Faker;

import java.util.Date;
import java.util.Random;

public class FakeDataProvider implements DataProvider {
  protected Faker faker = null;

  public FakeDataProvider(Random seed) {
    this.faker = new Faker(seed);
  }

  @Override
  public String getUUID() {
    long a = faker.number().numberBetween(0, Long.parseLong("4294967296"));
    long b = faker.number().numberBetween(0, 65536);
    long c = faker.number().numberBetween(0, 65536);
    long d = faker.number().numberBetween(0, 65536);
    long e = faker.number().numberBetween(0, Long.parseLong("281474976710656"));
    return String.format("%s-%s-%s-%s-%s", Long.toHexString(a), Long.toHexString(b), Long.toHexString(c), Long.toHexString(d), Long.toHexString(e));
  }

  @Override
  public String getFirstName() {
    return faker.name().firstName();
  }

  @Override
  public String getLastName() {
    return faker.name().lastName();
  }

  @Override
  public Date getBirthday() {
    return faker.date().birthday();
  }

  @Override
  public String getCellPhone() {
    return faker.phoneNumber().cellPhone();
  }

  @Override
  public String getAddress() {
    return faker.address().streetAddress(faker.bool().bool());
  }

  @Override
  public String getCity() {
    return faker.address().city();
  }

  @Override
  public String getState() {
    return faker.address().state();
  }

  @Override
  public String getZipCode() {
    return faker.address().zipCode();
  }

  @Override
  public String getEmail() {
    return faker.internet().emailAddress();
  }

  @Override
  public String getMedicalSymptoms() {
    return faker.medical().symptoms();
  }

  @Override
  public String getMedicineName() {
    return faker.medical().medicineName();
  }

  @Override
  public String getHospitalName() {
    return faker.medical().hospitalName();
  }

}
