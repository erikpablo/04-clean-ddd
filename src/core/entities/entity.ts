export class Entity<props> {
  private _id: string
  protected props: props

  get id() {
    return this._id
  }
  constructor(props: props, id?: string) {
    this.props = props
    this._id = id ?? crypto.randomUUID()
  }
}
