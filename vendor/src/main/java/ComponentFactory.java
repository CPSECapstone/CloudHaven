public class ComponentFactory {

  public enum Type {
    TEXT, TEXT_INPUT, UNSUPPORTED
  }

  public static Component makeComponent(Type type) throws UnsupportedType {
    switch (type) {
      case TEXT:  return new TextComponent();
      case TEXT_INPUT: return new TextInputComponent();
      case UNSUPPORTED: throw new UnsupportedType("Unsupported Component Type");
    }
    throw new UnsupportedType(String.format("'%s' is not a supported type", type.name()));
  }

  static class UnsupportedType extends Exception {
    UnsupportedType(String s) {
      super(s);
    }
  }
}
