class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commenter, :text, :position
end
