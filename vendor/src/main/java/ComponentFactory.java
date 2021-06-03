public class ComponentFactory {

  public enum Type {
    TEXT, TEXT_INPUT, BUTTON, UNSUPPORTED
  }

  public static Component makeComponent(Type type) throws UnsupportedType {
    switch (type) {
      case TEXT:  return new TextComponent();
      case TEXT_INPUT: return new TextInputComponent();
      case BUTTON: return new ButtonComponent();
      default:
      case UNSUPPORTED: throw new UnsupportedType(String.format("'%s' is not a supported type", type.name()));
    }
  }

  static class UnsupportedType extends Exception {
    UnsupportedType(String s) {
      super(s);
    }
  }
}
