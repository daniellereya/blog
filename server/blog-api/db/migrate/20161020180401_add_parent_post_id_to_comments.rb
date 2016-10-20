class AddParentPostIdToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :parent_post_id, :integer
  end
end
