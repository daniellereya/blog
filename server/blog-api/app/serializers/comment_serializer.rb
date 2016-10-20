class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commenter, :text, :position, :parent_post_id
end
