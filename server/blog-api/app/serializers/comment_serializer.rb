class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commenter, :text, :position, :post_id
end
