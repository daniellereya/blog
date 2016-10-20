class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :text
      t.string :commenter
      t.string :position

      t.timestamps
    end
  end
end
